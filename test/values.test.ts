import _ from 'lodash';
import create from '../source/create';
import values from '../source/values';

const object = create({ a: 1 }, { b: 2, c: 3 });

test(`values(create({ a: 1 }, { b: 2, c: 3 })) => ${values(object)}`, () => {
    expect(values(object)).toEqual(_.values(object));
});

test(`values('hi') => ${values('hi')}`, () => {
    expect(values('hi')).toEqual(_.values('hi'));
});