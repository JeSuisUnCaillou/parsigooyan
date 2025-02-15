import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

import HomeView from '../HomeView.vue'

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createPinia()]
      }
    })
    expect(wrapper.text()).toContain('The only pocket dictionary of foreign words in Farsi')
  })
})
