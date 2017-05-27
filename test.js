import binCheck from 'bin-check';
import test from 'ava';
import m from '.';

test('return path to binary and verify that it is working', async t => {
	t.true(await binCheck(m, ['--version']));
});
