<script>
  import Counter from './lib/Counter.svelte'
  import LDClientArray from './lib/LDClientArray.js'

  let ldClientArray = new LDClientArray("5e7bea4971450607417b2897", {"anonymous":true})
  
  let testClient
  let color = "#FFFFFF"

  async function appInit() {
    await ldClientArray.init({})
    testClient = ldClientArray[0]
    color = testClient.variation('background-color', false)

    testClient.on("change:background-color", (newValue, oldValue) => {
      color = newValue
    })
  }
  
</script>

<main>
  <h1>Hello world!</h1>

  {#await appInit()}
  <p>Loading!</p>
  {:then}
  <p>Background is {color}</p>
  {/await}

  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
