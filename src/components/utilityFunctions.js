export function clickScroll(id){
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
}

export function goBackToSection(navigate, id){
  navigate("/", { state: { targetId: id } });
}