import BarCards from '../../components/BarCards/BarCards';

const ExploreSection = (props) => {
  //console.log('ExploreSection props :', props);
  //console.log('ExploreSection props, tableau direct', props.places);
  //const [dataFetched, error, loading] = useContext(MapContext);
  //console.log('quai je dans le context', dataFetched);

  return (
    //<section className="w-full md:w-1/3 lg:w-1/4 p-5">
    <section className="">
      <h3 className="font-display text-4xl py-4">Explorer</h3>
      <BarCards array={props} />
    </section>
  );
};

export default ExploreSection;
