"use client"

import Button from "@/components/Button"

export default function Home() {
  return (
    <>
      <Button>Primary</Button>
      <Button variant="outlined">Outlined</Button>
      <Button isDisabled>Disabled</Button>
    </>
  )
}
