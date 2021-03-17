const handlers = require('./index')

describe('Endpoints',()=>{
    describe('users',()=>{
        describe('get',()=>{
            it('return to user json', async()=>{
                const axios = { // Promise
                    get: jest.fn().mockResolvedValue({data:1})
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                await handlers({axios}).get({},res)
                expect(res.status.mock.calls).toEqual([[200]])
                expect(res.send.mock.calls).toEqual([[1]])
            })
        })
        describe('post',()=>{
            it('create a resource', async()=>{
                const axios = { // Promise
                    post: jest.fn().mockResolvedValue({data:1})
                }
                const res = {
                    status: jest.fn().mockReturnThis(),
                    send: jest.fn()
                }
                const req = {
                    body: 'request body'
                }
                await handlers({axios}).post(req,res)
                expect(res.status.mock.calls).toEqual([[201]])
                expect(res.send.mock.calls).toEqual([[1]])
                expect(axios.post.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users','request body']])
            })
        })
        describe('put',()=>{
            it('update a resource', async()=>{
                const axios = { // Promise
                    put: jest.fn().mockResolvedValue({data:1})
                }
                const res = {
                    sendStatus: jest.fn()
                }
                const req = {
                    body: 'request body',
                    params:{
                        id: 12
                    }
                }
                await handlers({axios}).put(req,res)
                expect(axios.put.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users/12','request body']])
                expect(res.sendStatus.mock.calls).toEqual([[204]])
            })
        })
        describe('delete',()=>{
            it('delete a resource', async()=>{
                const axios = { // Promise
                    delete: jest.fn().mockResolvedValue({data:1})
                }
                const res = {
                    sendStatus: jest.fn()
                }
                const req = {
                    params:{
                        id: 12
                    }
                }
                await handlers({axios}).delete(req,res)
                expect(axios.delete.mock.calls).toEqual([['https://jsonplaceholder.typicode.com/users/12']])
                expect(res.sendStatus.mock.calls).toEqual([[204]])
            })
        })
    })
})