import { FormRow } from "../../components/index.component";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const [values, setValues] = useState(user);
  const { name, email, location, lastName } = values;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !location || !lastName) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    dispatch(updateUser(values));
  };

  const handleChange = (e) => {
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newValues);
  };

  return (
    <section className="box-style">
      <h3>profile</h3>
      <form onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="name"
          text="first name"
          value={name}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="lastName"
          text="last name"
          value={lastName}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="location"
          value={location}
          handleChange={handleChange}
        />
        <FormRow type="email" name="email" value={email} disabled={true} />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? <span className="spinner"></span> : "save changes"}
        </button>
      </form>
    </section>
  );
};
export default Profile;
