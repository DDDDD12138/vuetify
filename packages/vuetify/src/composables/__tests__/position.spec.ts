// Composables
import { usePosition } from '../position'

// Utilities
import { expect, it } from 'vitest'

// Types
import type { PositionProps } from '../position'

describe('position', () => {
  it.each([
    [{ position: undefined }, undefined],
    [{ position: false }, undefined],
    [{ position: 'absolute' }, 'foo--absolute'],
    [{ position: 'fixed' }, 'foo--fixed'],
  ])('position=%s', (props, expected) => {
    const { positionClasses } = usePosition(props as PositionProps, 'foo')

    expect(positionClasses.value).toEqual(expected)
  })
})
