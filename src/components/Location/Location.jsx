import css from './Location.module.css';

export default function Location() {
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="location">
        Location
      </label>
      <input
        className={css.input}
        id="location"
        type="text"
        placeholder="City"
      />
    </div>
  );
}
