<script lang="ts">
  import { spring } from "svelte/motion"

  export let active: boolean = false

  let switchRef: HTMLDivElement
  let ballRef: HTMLDivElement

  const ballSpring = spring(1, {
    damping: 0.35,
  })
  $: if (switchRef) {
    active ? ($ballSpring = switchRef.offsetWidth - 15) : ($ballSpring = 1)
  }
  $: if (ballRef) {
    ballRef.style.left = `${$ballSpring}px`
  }
</script>

<div class="Switch" bind:this={switchRef} class:active on:click>
  <div class="ball" bind:this={ballRef} />
</div>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  .Switch {
    position: relative;

    display: flex;
    align-items: center;

    width: 2rem;
    height: 1rem;
    padding: 1px;

    border-radius: 5rem;
    background: gray;

    &.active {
      background: blue;

      justify-content: end;
    }
  }

  .ball {
    position: absolute;

    aspect-ratio: 1 / 1;
    height: calc(100% - 2px);

    border-radius: 50%;
    background: white;
  }
</style>
