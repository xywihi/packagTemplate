import Loadable from 'react-loadable';
// import Loadable from '@react-loadable/revised';

const LoadableComponent = (component) => Loadable({
  loader: component,
  loading: ()=>null,
});
// const LoadableComponent = (url) => Loadable({
//     loader() { return import("./pages/user") },
//     loading: ()=>null
//   })
export default LoadableComponent;