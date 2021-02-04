import React from "react";
import "../App.css";

const NewSongs = (props) => {
  const sample ={
    title: "songName",
    artist: "singer",
    time: "5:00"
  }

  // --- Change to props.songs later when App is updated. ----
  const [formData, setFormData] = React.useState(sample)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("you submitted: ", formData)
    //props.handleSubmit(formData); // Submit to Parents desired function
  };


  // -- Everytime you tye, you see consolelog changes. When finished typing, the setFormData will update state to current form state. So when you submit, it will pass the info back to App to handle. ---
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2> New Songs Component </h2>

      <form >
        <div>
          <label>Song Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Song Artist</label>
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Time Length</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <button onClick={ handleSubmit} >Add</button>
      </form>
    </div>
  );
};

export default NewSongs;
