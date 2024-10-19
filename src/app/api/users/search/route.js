
import { connectdb } from "../../../../dbConfiq/dbConfiq";
import User from '../../../../models/user.model';

export default async function handler(req, res) {
  const { method, query } = req;

  connectdb();

  switch (method) {
    case 'GET':
      try {
        const filters = {};

        // Construct filters based on query parameters
        if (query.firstName) filters.firstName = query.firstName;
        if (query.lastName) filters.lastName = query.lastName;
        if (query.email) filters.email = query.email;
        if (query.phoneNumber) filters.phoneNumber = query.phoneNumber;
        if (query.address) filters.address = query.address;
        if (query.state) filters.state = query.state;
        if (query.zipCode) filters.zipCode = query.zipCode;
        if (query['driving-license-no']) filters.drivingLicenseNo = query['driving-license-no'];
        if (query['id-card-no']) filters.idCardNo = query['id-card-no'];

        const users = await User.find(filters);
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
