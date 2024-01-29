type Props = string | { [key: string]: boolean } | undefined;

const classNames = (...props: Props[]): string => {
  const resultClasses: string[] = [];

  props.forEach((className) => {
    if (className === undefined) {
      return;
    }

    if (typeof className === "string") {
      return resultClasses.push(className);
    }

    Object.keys(className).forEach((key) => {
      if (className[key]) {
        resultClasses.push(key);
      }
    });
  });

  return resultClasses.join(" ");
};

export default classNames;
