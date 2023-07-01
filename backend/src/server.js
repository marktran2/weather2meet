import express, { json, Request,  } from 'express';
import { echo } from './echo';
import morgan from 'morgan';
import config from './config.json';
import cors from 'cors';
import errorHandler from 'middleware-http-errors';

import { authLoginV3, authRegisterV3, authLogoutV2, authPasswordResetRequestV1, authPasswordResetV1 } from './auth';
import {
  channelDetailsV3, channelJoinV3, channelInviteV3, channelMessagesV3,
  channelAddOwnerV2, channelLeaveV2, channelRemoveOwnerV2
} from './channel';
import { channelsCreateV3, channelsListV3, channelsListAllV3 } from './channels';
import { userProfileV3, userSetNameV2, userSetEmailV2, userSetHandleV2, userProfileUploadPhotoV1 } from './user';
import { dmCreateV2, dmListV2, dmRemoveV2, dmDetailsV2, dmMessagesV2, dmLeaveV2 } from './dm';
import { clearV1 } from './other';
import { messageSendDmV2, messageSendV2, messageEditV2, messageRemoveV2, messageReactV1, messageUnreactV1, messagePinV1, messageUnpinV1, messageSendLaterV1, messageSendLaterDmV1, messageShareV1 } from './message';
import { usersAllV2 } from './users';
import { standupActive, standupSend, standupStart } from './standup';
import { notificationsGetV1 } from './notifications';
import { searchV1 } from './search';
import { adminUserPermChangeV1, adminUserRemoveV1 } from './admin';
import './weather.js'

// Set up web app
const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors (print to terminal)
app.use(morgan('dev'));

const PORT = parseInt(process.env.PORT || config.port);
const HOST = process.env.IP || 'localhost';

// Example get request
app.get('/echo', (req, res) => {
  const data = req.query.echo as string;
  return res.json(echo(data));
});

app.post('/auth/login/v3', (req, res) => {
  const { email, password } = req.body;
  res.json(authLoginV3(email, password));
});

app.delete('/dm/remove/v2', (req, res) => {
  const token = req.header('token');
  const dmId = parseInt(req.query.dmId as string);
  res.json(dmRemoveV2(token, dmId));
});

// Keep this BENEATH route definitions
// handles errors nicely
app.use(errorHandler());

// start server
const server = app.listen(PORT, HOST, () => {
  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});
