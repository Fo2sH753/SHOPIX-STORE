var button = document.querySelector(".toggle");
var savedTheme = localStorage.getItem("theme");

document.documentElement.setAttribute("data-theme", savedTheme);

if (button) {
  button.textContent =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "Dark"
      : "Light";
}

if (button) {
  button.addEventListener("click", function () {
    document.documentElement.classList.add("theme-transition");
    var currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    localStorage.setItem(
      "theme",
      document.documentElement.getAttribute("data-theme"),
    );
    button.textContent =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "Dark"
        : "Light";

    setTimeout(function () {
      document.documentElement.classList.remove("theme-transition");
    }, 350);
  });
}

var contactSubmit = document.getElementById("contact-submit");
if (contactSubmit) {
  contactSubmit.addEventListener("click", function (event) {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || phone === "" || message === "") {
      event.preventDefault();
      alert("Please make sure to fill in all the fields.");
      return false;
    } else {
      alert("Your message has been sent successfully!");
      return true;
    }
  });
}

var layoutToggleButton = document.getElementById("layout-toggle-btn");
var savedShopLayout = localStorage.getItem("shopLayout");

if (layoutToggleButton) {
  if (savedShopLayout === "wide") {
    document.body.classList.add("shop-layout-wide");
    layoutToggleButton.textContent = "Default Layout";
  } else {
    layoutToggleButton.textContent = "Wide Layout";
  }

  layoutToggleButton.addEventListener("click", function () {
    if (document.body.classList.contains("shop-layout-wide")) {
      document.body.classList.remove("shop-layout-wide");
      localStorage.setItem("shopLayout", "default");
      layoutToggleButton.textContent = "Wide Layout";
    } else {
      document.body.classList.add("shop-layout-wide");
      localStorage.setItem("shopLayout", "wide");
      layoutToggleButton.textContent = "Default Layout";
    }
  });
}

var reviewSubmit = document.getElementById("review-submit");
if (reviewSubmit) {
  reviewSubmit.addEventListener("click", function (event) {
    var review = document.getElementById("review").value.trim();

    if (review === "") {
      event.preventDefault();
      alert("Please make sure to fill in all the fields.");
      return false;
    } else {
      alert("Your message has been sent successfully!");
      return true;
    }
  });
}

var checkoutForm = document.querySelector(".checkout");
if (checkoutForm) {
  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var checkoutName = checkoutForm
      .querySelector('input[placeholder="Full Name"]')
      .value.trim();
    var checkoutPhone = checkoutForm
      .querySelector('input[placeholder="Phone Number"]')
      .value.trim();
    var checkoutAddress = checkoutForm
      .querySelector('input[placeholder="Adress In Detail"]')
      .value.trim();

    if (checkoutName === "" || checkoutPhone === "" || checkoutAddress === "") {
      alert("Please make sure to fill in all the fields.");
      return false;
    }

    alert("Your order has been placed successfully.");
    this.reset();
    return true;
  });
}
