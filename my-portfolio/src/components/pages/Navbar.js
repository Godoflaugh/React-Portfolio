export default function Navbar() {

  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white">Welcome</a>
        <a class="navbar-brand text-white" href="https://www.linkedin.com/in/kevin-lam-60452582/" target=" ">LinkedIn</a>
        <a class="navbar-brand text-white" href="https://github.com/Godoflaugh">GitHub</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )


}