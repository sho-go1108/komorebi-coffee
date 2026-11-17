import { useState, type ChangeEvent, type FormEvent } from "react";

type Fields = { name: string; email: string; topic: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = { name: "", email: "", topic: "ご質問", message: "" };

/** 入力内容をチェックして、エラーメッセージを返す */
const validate = (fields: Fields): Errors => {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "お名前を入力してください。";
  if (!fields.email.trim()) errors.email = "メールアドレスを入力してください。";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = "メールアドレスの形式が正しくありません。";
  if (!fields.message.trim()) errors.message = "メッセージを入力してください。";
  return errors;
};

/** お問い合わせフォーム（デモのため実際には送信しない） */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [isSent, setIsSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  // 入力欄からフォーカスが外れたら、その欄だけチェックする
  const onBlur = (name: keyof Fields) => {
    setErrors({ ...errors, [name]: validate(fields)[name] });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validate(fields);
    setErrors(result);

    const firstError = Object.keys(result)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }
    setFields(initialFields);
    setIsSent(true);
    setTimeout(() => setIsSent(false), 6000);
  };

  // 入力欄の共通の属性
  const fieldProps = (name: keyof Fields) => ({
    id: name,
    name,
    value: fields[name],
    onChange,
    onBlur: () => onBlur(name),
    className: errors[name] ? "is-invalid" : undefined,
    "aria-invalid": !!errors[name],
  });

  return (
    <form className="form reveal" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <label htmlFor="name">お名前 <span className="req">必須</span></label>
        <input type="text" autoComplete="name" {...fieldProps("name")} />
        <p className="form__error">{errors.name}</p>
      </div>
      <div className="form__row">
        <label htmlFor="email">メールアドレス <span className="req">必須</span></label>
        <input type="email" autoComplete="email" {...fieldProps("email")} />
        <p className="form__error">{errors.email}</p>
      </div>
      <div className="form__row">
        <label htmlFor="topic">お問い合わせ内容</label>
        <select id="topic" name="topic" value={fields.topic} onChange={onChange}>
          <option>ご質問</option>
          <option>貸切・イベント</option>
          <option>コーヒー豆の購入・卸売り</option>
          <option>その他</option>
        </select>
      </div>
      <div className="form__row">
        <label htmlFor="message">メッセージ <span className="req">必須</span></label>
        <textarea rows={5} {...fieldProps("message")} />
        <p className="form__error">{errors.message}</p>
      </div>
      <button type="submit" className="btn btn--primary btn--block">送信する</button>
      {isSent && <p className="form__success">送信ありがとうございました！（デモのため、実際には送信されません）</p>}
    </form>
  );
}
