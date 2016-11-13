import moment from 'moment';

const taskStatus = {
  dropped: -1,
  idle: 0,
  ongoing: 1,
  paused: 2,
  active: 3,
  done: 4,
};

const availabilities = {
  unknown: -1,
  idle: 0,
  active: 1,
  resting: 2,
  busy: 3,
};

const taskTips = [
  '✎ Plan your work in this list.',
  'Click tomato to start working.',
  'After finishing, take a rest.',
  'Restart if you are disturbed.',
  'Concentrate with your team.',
];

const getDefaultTasks = function getDefaultTasks() {
  const tasks = [];
  for (let i = 0; i < 5; i++) {
    // Avoid same object ref
    const defaultTask = {
      note: '',
      status: taskStatus.idle,
      startTime: null,
      createTime: moment(),
      emotion: 2,
    };

    tasks.push(defaultTask);
  }
  return tasks;
};

const team = {
  info: {
    inviteCode: 'HFE-Train',
    name: 'HFE-Train',
  },
  members: {
    UID: {
      rule: 'member',
      userInfo: {},
      userStatus: {},
      tasks: [],
      updateTime: '', // moment
    },
  },
};

const userData = {
  teamData: {
    currentTeam: '',
  },
  systemData: {
    rule: 'normal',
  },
};

export { taskStatus, taskTips, availabilities, getDefaultTasks, team, userData };
