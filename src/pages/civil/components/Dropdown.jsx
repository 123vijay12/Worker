import React from 'react'

export default function Dropdown() {
  return (
    <div>
        <div className="mt-4"> 
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Select an option
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#/action-1">
              Action 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odio praesentium est ullam veritatis accusantium soluta laudantium ut inventore quas voluptates corrupti, qui ducimus nam rem eius modi neque? Culpa.
              Harum accusantium ipsa dolorum error dolor esse repellendus modi, sunt eligendi aliquam veniam ab asperiores incidunt repellat quas blanditiis aperiam vel consequuntur consequatur possimus adipisci aspernatur nostrum fugiat optio. Beatae.
              Error alias tempore ducimus voluptate suscipit accusamus in nostrum officiis eveniet omnis itaque architecto tempora quaerat ipsum dolorum quo repellat et, minima neque, corrupti nemo corporis voluptatem! Nam, officiis animi?
              Debitis dolores, aliquam incidunt iste quia dolorum earum repellat maiores commodi velit perspiciatis placeat ea, rem ut assumenda neque harum veritatis labore optio necessitatibus beatae fugiat quasi quod sunt. Vero!
              Tempore fugit et animi quas alias? Velit perspiciatis error, eligendi tenetur quisquam quae aliquid molestias, cumque, magnam earum consequuntur? Quo, consequuntur saepe. Cum, at velit dignissimos veniam incidunt neque soluta.
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#/action-2">
              Action 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#/action-3">
              Action 3
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}
