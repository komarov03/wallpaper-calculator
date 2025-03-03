import { Link } from "react-router";
import styles from "../styles/CalculatorPromo.module.scss";

export function CalculatorPromo() {
  return (
    <div className={styles.calculator__promo}>
      <div className={styles.calculator__text}>
        <h1 className={styles.calculator__title}>Калькулятор обоев</h1>
        <p className={styles.calculator__description}>
          Онлайн-калькулятор расчета обоев поможет вам определить число рулонов,
          требуемых для оклеивания, с учетом окон и дверей. Чтобы получить
          точные результаты, просто укажите параметры помещения и размеры в
          специальной таблице. Наша программа также берет в учет повторение
          рисунка (раппорт), что позволяет оптимизировать расходы на материалы и
          клей.
        </p>
      </div>
      <Link
        to={"/calculate"}
        className={styles.calculator__start__button}
        href="#"
      >
        Начать расчет материалов
      </Link>
    </div>
  );
}
