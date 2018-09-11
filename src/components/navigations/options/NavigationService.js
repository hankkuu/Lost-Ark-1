import { NavigationActions, StackActions } from 'react-navigation';

/**
 * Caution: Do not use any method name same as below.
 * May cause javascript release bundling to currupt with method names.
 */

let _navigator = [];

function setTopLevelNavigator(_name, _navigatorRef) {
  let navigation = { name: _navigatorRef }
  _navigator.push(navigation)
}

function getNavigator(_name) {
  //console.log(_navigator);
  return _navigator[_name]; 
}

function navigate(_name, routeName, params) {
  console.log(_name);
  console.log(routeName);
  console.log(params);
  navigator = getNavigator(_name);
  console.log(navigator);
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function reset(_name, routeName) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName }),
    ],
  });
  navigator = getNavigator(_name);
  navigator.dispatch(resetAction);
}

function goBack(_name) {
  const popAction = StackActions.pop({
    n: 1,
  });
  navigator = getNavigator(_name);
  navigator.dispatch(popAction);
}

// add other navigation functions that you need and export them

export default {
  setTopLevelNavigator,
  navigate,
  reset,
  goBack,
};
