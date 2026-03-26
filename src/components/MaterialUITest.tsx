import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Box,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Chip,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@mui/icons-material';

const MaterialUITest: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [text, setText] = React.useState('');

  return (
    <Container maxWidth="lg">
      {/* AppBar с меню */}
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Demo
          </Typography>
          <Button color="inherit" startIcon={<PersonIcon />}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer (боковое меню) */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Основной контент */}
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Material UI Test
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
        <Chip label="Default Chip" />
        <Chip label="Primary Chip" color="primary" />
        <Chip label="Secondary Chip" color="secondary" />
        <Chip label="Success Chip" color="success" />
        <Chip label="Error Chip" color="error" />
        <Chip label="Warning Chip" color="warning" />
        <Chip label="Info Chip" color="info" />
      </Box>

      {/* Карточка */}
      <Card sx={{ maxWidth: 345, margin: '0 auto', mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
              <FavoriteIcon />
            </Avatar>
            <Typography variant="h5" component="div">
              Test Card
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" paragraph>
            This card demonstrates various Material UI components working together with proper TypeScript support.
          </Typography>
          <TextField
            fullWidth
            label="Test Input"
            variant="outlined"
            size="small"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Alert severity="info" sx={{ mb: 2 }}>
            You typed: {text || 'nothing yet'}
          </Alert>
        </CardContent>
        <CardActions>
          <Button size="small" startIcon={<FavoriteIcon />} onClick={() => setSnackbarOpen(true)}>
            Like
          </Button>
          <Button size="small" startIcon={<ShareIcon />}>
            Share
          </Button>
        </CardActions>
      </Card>

      {/* Snackbar для уведомлений */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Thanks for testing Material UI!"
      />
    </Container>
  );
};

export default MaterialUITest;