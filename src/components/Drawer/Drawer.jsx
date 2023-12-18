const Drawer = ({ isOpen, children }) => {
  const drawerClasses = isOpen ? '' : '-translate-x-[17rem]';

  // const overlayClasses = isOpen
  //   ? 'fixed inset-0 bg-black bg-opacity-50'
  //   : 'hidden';

  return (
    <>
      {/* Overlay */}
      {/* <div className={overlayClasses} onClick={onClose}></div> */}
      <div
        className={`drawer absolute z-10 bg-secondary  w-full md:w-1/3 lg:w-1/4 p-5 h-[calc(100vh-5rem)] shadow-lg overflow-y-auto ${drawerClasses}`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
