const ism = prompt("Ismingizni to‘liq kiriting:");

  if (ism) {

    const harf = prompt("Ismingizdan bir harf kiriting:");

    if (harf && harf.length === 1) {

      const ismKichkina = ism.toLowerCase();
      const harfKichkina = harf.toLowerCase();

      if (ismKichkina.includes(harfKichkina)) {
        alert("To‘g‘ri!");
      } else {
        alert("Xato!");
      }
    } else {
      alert("Faqat bitta harf kiriting!");
    }
  } else {
    alert("Ism kiritilmadi!");
  }