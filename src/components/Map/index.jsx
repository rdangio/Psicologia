const Map = () => {
  return (
    <div className="w-full">
      <div>
        <h2 className="ml-2 mt-2 text-fs-h4 font-bold">Cláudia Psicóloga</h2>
      </div>
      <div>
        {/* <iframe
          width="400"
          height="400"
          src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=pt-br&amp;q=Rua%20Conde%20do%20Pinhal,%20196%20Ja%C3%BA%20SP+(Cl%C3%A1udia%20Psic%C3%B3loga)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className="ml-2 mt-2"
        /> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14766.325786097132!2d-48.563867437414494!3d-22.293839475057318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c75806b38724ad%3A0x90aaf1c8eac8e12b!2sR.%20Conde%20do%20Pinhal%2C%20186%20-%20Centro%2C%20Ja%C3%BA%20-%20SP%2C%2017201-040!5e0!3m2!1spt-BR!2sbr!4v1734301870226!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
