import difference from 'lodash/difference';
import { print } from '../helpers';

export default function printDifference() {
    const foo = [1, 2, 3, 4, 5, 6];
    const bar = [1, 2, 3, 4];

    print('lodash-foo', `const foo = ${foo.toString()}`);
    print('lodash-bar', `const bar = ${bar.toString()}`);
    print('lodash-difference', `foo & bar difference is: ${difference(foo, bar).toString()}`);
}
