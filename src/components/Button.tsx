"use client"

import { Button as AriaButton } from 'react-aria-components'
import { sva } from '../../styled-system/css'

const button = sva({
    slots: ['root', 'control', 'label'],
    base: {
        root: {
            textStyle: 'body',
            display: 'block',
            height: '46px',
            padding: '0 22px',
            borderRadius: '50px',
            cursor: 'pointer',
            '&:disabled': { cursor: 'default'}
        },
    },
    variants: {
        variant: {
            primary: {
                root: {
                    background: 'primary', color: 'primary.text', '&:disabled': {
                        background: 'disabled', color: 'disabled.text'
                    }
                }
            },
            outlined: {
                root: { border: '1px solid', borderColor: 'divider'}
            }
        }
    },
    defaultVariants: {
        variant: 'primary'
    }
})

export default function Button({ variant = 'primary', children, ...props }: React.PropsWithChildren<{ variant?: 'primary' | 'outlined' } & React.ComponentProps<typeof AriaButton>>) {
    const classes = button({ variant })
    return <AriaButton className={classes.root} {...props}>{children}</AriaButton>
}