import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !date) {
      alert("Please fill out all fields");
      return;
    }
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setDate("");
    setComment("");
  };

  if (isSubmitted) {
    return (
      <div className={styles.formContainer}>
        <h2>Thank you!The car has been reserved</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Date: {date}</p>
        <p>Comment: {comment}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Reservation Form</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
