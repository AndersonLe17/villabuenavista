class NavItems {
  constructor(title, icon, to, ListSubItems = []) {
    this.title = title;
    this.icon = icon;
    this.to = to;
    this.ListSubItems = ListSubItems;
  }
}

class SubItem {
  constructor(title, to) {
    this.title = title;
    this.to = to;
  }
}

export const navItems = [
  new NavItems("Dashboard", "fa-light fa-hotel", "/dashboard"),
  new NavItems("Reservas", "fa-light fa-bookmark", false, [
    new SubItem("Reservar", "/booking"),
    new SubItem("Check-In", "/booking/checkin"),
    new SubItem("Check-Out", "/booking/checkout"),
  ]),
  new NavItems("Habitaciones", "fa-light fa-bed-front", false, [
    new SubItem("Habitaciones", "/rooms"),
    new SubItem("Servicios", "rooms/services"),
  ]),
  new NavItems("Productos", "fa-light fa-cubes", false, [
    new SubItem("Productos", "/products"),
    new SubItem("Categorias", "/categories"),
  ]),
  new NavItems("Personal", "fa-light fa-user-tie", "/staff"),
  new NavItems("Clientes", "fa-light fa-users", "/clients"),
];
