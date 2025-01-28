import * as mediasoupClientTypes from 'mediasoup-client/lib/types';
import * as mediasoupClient from 'mediasoup-client';

test('mediasoupClientTypes', () => {
	expect(mediasoupClientTypes.Consumer).toBeDefined();
});
test('mediasoupClient', () => {
	expect(mediasoupClient.Device).toBeDefined();
});
test('mediasoupClient.version', () => {
	expect(mediasoupClient.version).toBeDefined();
});
