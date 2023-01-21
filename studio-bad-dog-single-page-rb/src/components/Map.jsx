const Map = () => {
  return (
    <article className="col-12 col-lg-6">
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26239.1481399007!2d-58.703872000000004!3d-34.7078656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc0f98f467867%3A0x6d8c4e1309e14806!2sLibertad%20Golf%20Club!5e0!3m2!1ses-419!2sar!4v1673625123765!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </article>
  );
};

export default Map;
