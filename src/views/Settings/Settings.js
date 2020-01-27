import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Upload, message } from 'antd';

import {
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
} from '../../state/actions/notificationActions';
import Notification from '../../components/Notifications/Notification';
import { updateUserInfo } from '../../state/actions/settingActions';

import StyledSettings from './SettingsStyles';

function Settings(props) {
  const {
    user,
    updateUserInfo,
    success,
    error,
    showErrorMessage,
    showSuccessMessage,
    closeMessage,
  } = props;

  const initialUserInfo = {
    first_name: user && user.first_name,
    last_name: user && user.last_name,
    email: user && user.email,
    password: '',
    confirm_password: '',
    avatar_url: user && user.avatar_url,
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleUpload = ({ file, onSuccess }) => {
    const image = new FormData();
    image.append('upload_preset', 'embouib2');
    image.append('file', file);
    const config = {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    };
    axios
      .post(
        'https://api.cloudinary.com/v1_1/ojokure/image/upload',
        image,
        config,
      )
      .then(res => {
        const secureUrl = res.data.secure_url;
        setUserInfo({
          ...userInfo,
          avatar_url: secureUrl,
        });
      });
  };

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const handlePictureChange = info => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, avatar_url =>
        setUserInfo({
          ...userInfo,
          avatar_url,
        }),
      );
    }
  };
  function beforeUpload(file) {
    const isJpgOrPng =
      file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = e => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateUserInfo(
      { ...userInfo, oldEmail: user.email },
      showErrorMessage,
      showSuccessMessage,
      closeMessage,
    );
  };

  const handleCancel = e => {
    e.preventDefault();
    props.history.push('/dashboard');
  };

  return (
    <StyledSettings className='setting-container'>
      <h3 className='settings-title'>Personal Information</h3>
      <div className='paper'>
        <div className='image-container'>
          <Upload
            name='avatar'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            customRequest={handleUpload}
            beforeUpload={beforeUpload}
            onChange={handlePictureChange}
          >
            {userInfo.avatar_url ? (
              <img src={userInfo.avatar_url} alt='avatar' />
            ) : (
              <Avatar
                className='picture'
                alt='Coach'
                src={userInfo.avatar_url}
              />
            )}
          </Upload>
        </div>

        <form className='form' noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                size='small'
                autoComplete='fname'
                name='first_name'
                variant='outlined'
                fullWidth
                id='first_name'
                label={userInfo.first_name}
                placeholder={userInfo.first_name}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                id='lastName'
                placeholder={userInfo.last_name}
                label={userInfo.last_name}
                name='last_name'
                autoComplete='lname'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                id='email'
                label={userInfo.email}
                name='email'
                autoComplete='email'
                placeholder={userInfo.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                name='password'
                label='New Password'
                type='password'
                id='password'
                value={userInfo.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size='small'
                variant='outlined'
                fullWidth
                name='confirm_password'
                label='Confirm New Password'
                type='password'
                id='confirm_password'
                value={userInfo.confirm_password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <div className='button'>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleSubmit}>Save Changes</button>
          </div>
        </form>
      </div>
      <Notification
        onClose={closeMessage}
        variant='success'
        message='your profile has been updated successfully'
        open={success}
      />

      <Notification
        onClose={closeMessage}
        variant='error'
        message='unable to update user profile'
        open={error}
      />
    </StyledSettings>
  );
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  success: state.notificationsReducer.success,
  error: state.notificationsReducer.error,
});

export default connect(mapStateToProps, {
  updateUserInfo,
  showErrorMessage,
  showSuccessMessage,
  closeMessage,
})(Settings);
