const Breadcrumb = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="fs-1 mb-2">{subTitle}</h1>
      <div className="d-flex align-items-end">
        <p className="">{title}</p>
        <span className="mx-2">
          <i className="fa-regular fa-chevron-right fs-min"></i>
        </span>
        <p className="text-black-50">{subTitle}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
