import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'theme'
const META_COLORS = {
  dark: '#050506',
  light: '#f5f5f8',
}

const listeners = new Set()

let current = getInitialTheme()

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(theme) {
  const root = document.documentElement
  root.classList.add('theme-switching')
  root.dataset.theme = theme
  window.localStorage.setItem(STORAGE_KEY, theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', META_COLORS[theme])
  window.setTimeout(() => root.classList.remove('theme-switching'), 320)
}

export function getTheme() {
  return current
}

export function toggleTheme() {
  current = current === 'dark' ? 'light' : 'dark'
  applyTheme(current)
  listeners.forEach((listener) => listener())
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme)
}
