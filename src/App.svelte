<script>
import {Router, Link, Route, navigate} from "svelte-routing";
  import Login from "./views/Login.svelte";
  import MainMenu from "./views/MainMenu.svelte";
  import Record from "./views/Record.svelte";
  import TempoSelection from "./views/TempoSelection.svelte";
  import Editor from "./views/Editor.svelte";
  import { Modals, closeModal } from 'svelte-modals'

</script>

<main class="overflow-hidden">
 
  <Router>
    <!-- <nav>
      <Link to="/">HOME</Link>
      <Link to="/editor">EDITOR</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/mainmenu">MAINMENU</Link>
    </nav>  -->
    
    
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/editor">
      <Editor />
    </Route>
    <!-- <Route path="/editor-drawer">
      <EditorDrawer />
    </Route>
    <Route path="/editor-savesheet">
      <EditorSavesheet />
    </Route> -->
    <Route path="/mainmenu">
      <MainMenu />
    </Route> 
    <Route path="/record">
      <Record />
    </Route> 
    <Route path="/tempo-selection">
      <TempoSelection />
    </Route>
    
  </Router>
   
</main>

<Modals>
  <div
    slot="backdrop"
    class="backdrop fixed inset-0 bg-black/50"
    on:click={closeModal}
  />
</Modals>