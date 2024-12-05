import { test, expect } from '@playwright/test';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});

const newPost = {
	title: 'post title',
	body: 'post body',
	userId: 1,
};

const updatedPost = {
	title: 'updated title',
	body: 'updated body',
	userId: 1,
};

test.describe('JSONPlaceholder API Tests', () => {
	test('Create new post', async () => {
		const response = await api.post('/posts', newPost);
		const responseData = response.data as any;
		expect(response.status).toBe(201);
		expect(responseData.title).toBe(newPost.title);
		expect(responseData.body).toBe(newPost.body);
		expect(responseData.userId).toBe(newPost.userId);
		console.log(response.data);
	});

	test('Get post by id', async () => {
		const response = await api.get('/posts/1');
		const responseData = response.data as any;
		expect(response.status).toBe(200);
		expect(responseData.id).toBe(1);
	});

	test('Get comments by post id', async () => {
		const response = await api.get('/posts/2/comments');
		const responseData = response.data as any;
		expect(response.status).toBe(200);
		expect(Array.isArray(response.data)).toBe(true);
		expect(responseData.length).toBeGreaterThan(0);
		expect(responseData[0]).toHaveProperty('postId', 2);
	});

	test('Update post', async () => {
		const response = await api.put('/posts/1', updatedPost);
		const responseData = response.data as any;
		expect(response.status).toBe(200);
		expect(responseData.title).toBe(updatedPost.title);
		expect(responseData.body).toBe(updatedPost.body);
		expect(responseData.userId).toBe(updatedPost.userId);
	});

	test('Delete post', async () => {
		const response = await api.delete('/posts/1');
		expect(response.status).toBe(200);
	});
});
