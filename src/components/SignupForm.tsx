import React, { useState } from "react";

type FormProps = {
  onSubmit: (form: {
    name: string;
    age: number;
    email: string;
    pwd: string;
  }) => void;
};

function SignupForm({ onSubmit }: FormProps) {
  const [form, setForm] = useState({
    name: "",
    age: 0,
    email: "",
    pwd: "",
  });
  const { name, age, email, pwd } = form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      age: 0,
      email: "",
      pwd: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="이름을 입력하세요"
          name={name}
          value={name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="나이를 입력하세요"
          name={age}
          value={age}
          onChange={handleChange}
          required
        />
        <input
          placeholder="이메일을 입력하세요"
          name={email}
          value={email}
          onChange={handleChange}
          required
        />
        <input
          placeholder="비밀번호를 입력하세요"
          name={pwd}
          value={pwd}
          onChange={handleChange}
          required
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default SignupForm;
