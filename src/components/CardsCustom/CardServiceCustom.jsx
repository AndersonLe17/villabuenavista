const CardServiceCustom = ({ title, price, imageRoom }) => {
  return (
    <div class="card bg-dark text-white">
      <img
        class="card-img"
        src={imageRoom}
        alt="Card image"
        style={{ maxWidth: "100%", height: "330px" }}
      ></img>

      <div class="card-img-overlay d-flex flex-column justify-content-end">
        <div class="text-white">
          <div class="row">
            <div class="col-md-6">
              <p class="card-text">
                {title}
                <br />
                {price} Noche
              </p>
            </div>

            <div class="col-md-6 text-end">
              <a href="#" class="link-light" style={{ textDecoration: "none" }}>
                <br />
                Mas detalles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardServiceCustom;
