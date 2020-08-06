const combineSelectors = (...selectors) => state =>
  selectors.reduce(
    (finalSelectors, currentSelector) => ({
      ...finalSelectors,
      ...currentSelector(state),
    }),
    {},
  );

export { combineSelectors };
