import db from '../../../utils/firebase';

export default async (req, res) => {
  const { slug } = req.query;

  if (req.method === 'POST') {
    const ref = await db.collection('views').doc(slug).get();

    if (!ref.exists) {
      await db.collection('views').doc(slug).set({ views: 1 }, { merge: true });
      return res.status(200).end();
    }

    await db.collection('views').doc(slug).update({ views: ref.data()?.views + 1 });

    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const ref = await db.collection('views').doc(slug).get();

    if (!ref.exists || !ref.data()) {
      return res.status(200).json({ views: 0 });
    }

    return res.json(ref.data());
  }
};