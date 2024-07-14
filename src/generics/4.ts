type NewUser = {
	name: string;
	surname: string;
	email: string;
	password: string;
  };
  
  function createOrUpdateUser(initialValues: Partial<NewUser>) {
	// Оновлення користувача
  }
  
  createOrUpdateUser({
	email: 'user@mail.com',
	password: 'password123',
  });