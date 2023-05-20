import { useLoaderData } from "react-router-dom";


const AddToy = () => {
    const toys = useLoaderData();

    const {
        seller,
        price,
        availableQuantity,
        rating,
        detailsDescription,
        picture,
        toyName,
      } = toys;

    return (
        <div>
            <h2>Add A TOY</h2>
        </div>
    );
};

export default AddToy;