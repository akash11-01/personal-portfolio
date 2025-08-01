// import React from 'react'

// const WorkItems = ({item}) => {
//   return (
//     <div className="work__card" key={item.id}>
//         <img src={item.image} alt="" className='work__img'/>
//         <h3 className="work__title">{item.title}</h3>
//         <a href="https://github.com/Atharva-3000" target="_blank" className="work__button">
//             Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
//         </a>
//     </div>
//   )
// }

// export default WorkItems
const WorkItems = ({
  item,
  deploymentLink,
  githubLink,
  description,
  technologies,
}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <div className="work__info">
        <h3 className="work__title">{item.title}</h3>
        <div className="work__info2">
          <a
            href={deploymentLink}
            target="_blank"
            className="work__button"
            rel="noreferrer"
          >
            <i class="uil uil-external-link-alt"></i>
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="work__button"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <p className="work__description">{description}</p>
      <p>
        <span className="work__description2">Tools:</span>{" "}
        <span className="work__description">{technologies}</span>
      </p>
    </div>
  );
};

export default WorkItems;
