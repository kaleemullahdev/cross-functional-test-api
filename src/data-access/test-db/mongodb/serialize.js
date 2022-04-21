const serializeSingle = (account) => ({
	id: account._id,
	name: account.name,
	phone: account.phone,
	email: account.email,
	createdAt: account.createdAt,
	deletedAt: account.deletedAt,
});

const serializer = (data) => {
	if (!data) {
		return null;
	}
	if (Array.isArray(data)) {
		return data.map((item) => serializeSingle(item));
	}
	return serializeSingle(data);
};

module.exports = serializer;
