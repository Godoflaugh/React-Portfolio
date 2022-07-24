export default function Navbar() {

  return (
    <nav class="navbar bg-dark m-5 ">
      <div class="container-fluid">
        <a class="navbar-brand text-white">Kevin Lam</a>
        <a class="navbar-brand text-white" href="#projects">Projects</a>
        <a class="navbar-brand text-white" href="#contactForm" >Contact</a>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )


}