import {
	IParamsGetRoom,
	IReOpenRoom,
	IResponseLessed,
	IResponseRented,
	IRoomFeedback,
	IRoomParams,
	room,
} from '@/models/room'
import { CommonPagination } from './../models/common'

import axiosClient from './axiosClient'
const BASES_URL = '/room'

export const roomApi = {
	createRoom(params: IRoomParams) {
		return axiosClient.post(`${BASES_URL}/create-room`, params)
	},

	getAllRoom(params: IParamsGetRoom) {
		// return axiosClient.get<CommonPagination<IResponseLessed[]>>(`${BASES_URL}`, { params: params })
		// return dat=
		let data = {
			data: {
				items: [
					{
						room: {
							_id: '1',
							name: 'Phòng 101',
							acreage: 30,
							nbCurrentPeople: 2,
							totalNbPeople: 4,
							gender: 'Nam',
							typeRoom: 'Phòng Đôi',
							deposit: 1000000,
							description: 'Phòng đẹp, rộng rãi và đầy đủ tiện nghi.',
							amentilities: ['Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Wifi miễn phí'],
							basePrice: 2000000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{
									name: 'Dọn phòng',
									description: 'Dọn phòng hàng ngày',
									basePrice: 50000,
									unitName: 'Lần',
								},
								{
									name: 'Internet',
									description: 'Internet tốc độ cao',
									basePrice: 100000,
									unitName: 'Tháng',
								},
							],
							owner: {
								_id: 'owner1',
								username: 'thanhdao',
								email: 'thanhdao@example.com',
								phone: '0912345678',
								identity: '123456789012',
								name: 'Thanh Đào',
								avatar: 'http://example.com/avatars/owner1.jpg',
							},
							createdAt: '2024-09-01T08:00:00Z',
							updatedAt: '2024-09-05T08:00:00Z',
							address: {
								addressDetail: '123 Đường ABC',
								city: 'Hà Nội',
								district: 'Cầu Giấy',
								fullText: '123 Đường ABC, Cầu Giấy, Hà Nội',
								street: 'Đường ABC',
								ward: 'Nghĩa Đô',
							},
							period: 12,
							status: 'Có sẵn',
						},
					},
					{
						room: {
							_id: '2',
							name: 'Phòng 102',
							acreage: 25,
							nbCurrentPeople: 1,
							totalNbPeople: 3,
							gender: 'Nữ',
							typeRoom: 'Phòng Đơn',
							deposit: 800000,
							description: 'Phòng nhỏ, tiện lợi cho sinh viên.',
							amentilities: ['Wifi miễn phí', 'Điều hòa', 'Máy nước nóng'],
							basePrice: 1500000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{
									name: 'Giặt ủi',
									description: 'Dịch vụ giặt ủi hàng tuần',
									basePrice: 30000,
									unitName: 'Lần',
								},
								{ name: 'Dọn phòng', description: 'Dọn dẹp phòng', basePrice: 40000, unitName: 'Lần' },
							],
							owner: {
								_id: 'owner2',
								username: 'lananh',
								email: 'lananh@example.com',
								phone: '0919876543',
								identity: '987654321098',
								name: 'Lan Anh',
								avatar: 'http://example.com/avatars/owner2.jpg',
							},
							createdAt: '2024-08-20T08:00:00Z',
							updatedAt: '2024-08-25T08:00:00Z',
							address: {
								addressDetail: '456 Đường DEF',
								city: 'Hà Nội',
								district: 'Ba Đình',
								fullText: '456 Đường DEF, Ba Đình, Hà Nội',
								street: 'Đường DEF',
								ward: 'Phúc Xá',
							},
							period: 6,
							status: 'Có sẵn',
						},
					},
					{
						room: {
							_id: '3',
							name: 'Phòng 201',
							acreage: 35,
							nbCurrentPeople: 3,
							totalNbPeople: 4,
							gender: 'Nam',
							typeRoom: 'Phòng Đôi',
							deposit: 1200000,
							description: 'Phòng rộng rãi, thích hợp cho nhóm bạn.',
							amentilities: ['Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Bếp điện'],
							basePrice: 2500000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{
									name: 'Internet',
									description: 'Wifi tốc độ cao',
									basePrice: 120000,
									unitName: 'Tháng',
								},
								{
									name: 'Dọn phòng',
									description: 'Dọn phòng hàng ngày',
									basePrice: 60000,
									unitName: 'Lần',
								},
							],
							owner: {
								_id: 'owner3',
								username: 'minhtri',
								email: 'minhtri@example.com',
								phone: '0912456789',
								identity: '123654789012',
								name: 'Minh Trí',
								avatar: 'http://example.com/avatars/owner3.jpg',
							},
							createdAt: '2024-07-15T08:00:00Z',
							updatedAt: '2024-08-01T08:00:00Z',
							address: {
								addressDetail: '789 Đường GHI',
								city: 'Hà Nội',
								district: 'Hoàn Kiếm',
								fullText: '789 Đường GHI, Hoàn Kiếm, Hà Nội',
								street: 'Đường GHI',
								ward: 'Tràng Tiền',
							},
							period: 12,
							status: 'Đang cho thuê',
						},
					},
					{
						room: {
							_id: '4',
							name: 'Phòng 202',
							acreage: 28,
							nbCurrentPeople: 2,
							totalNbPeople: 3,
							gender: 'Nữ',
							typeRoom: 'Phòng Đơn',
							deposit: 900000,
							description: 'Phòng mới, thoáng mát, gần trung tâm.',
							amentilities: ['Máy lạnh', 'Tủ đồ', 'Nước nóng'],
							basePrice: 1800000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{ name: 'Nước', description: 'Nước sinh hoạt', basePrice: 50000, unitName: 'Tháng' },
								{
									name: 'Dọn phòng',
									description: 'Dọn dẹp hàng tuần',
									basePrice: 30000,
									unitName: 'Lần',
								},
							],
							owner: {
								_id: 'owner4',
								username: 'hoailinh',
								email: 'hoailinh@example.com',
								phone: '0987654321',
								identity: '789654123098',
								name: 'Hoài Linh',
								avatar: 'http://example.com/avatars/owner4.jpg',
							},
							createdAt: '2024-06-01T08:00:00Z',
							updatedAt: '2024-06-15T08:00:00Z',
							address: {
								addressDetail: '321 Đường JKL',
								city: 'Hà Nội',
								district: 'Đống Đa',
								fullText: '321 Đường JKL, Đống Đa, Hà Nội',
								street: 'Đường JKL',
								ward: 'Khâm Thiên',
							},
							period: 6,
							status: 'Có sẵn',
						},
					},
					{
						room: {
							_id: '5',
							name: 'Phòng 203',
							acreage: 26,
							nbCurrentPeople: 2,
							totalNbPeople: 2,
							gender: 'Nam',
							typeRoom: 'Phòng Đơn',
							deposit: 850000,
							description: 'Phòng đẹp, giá rẻ phù hợp sinh viên.',
							amentilities: ['Wifi miễn phí', 'Tủ đồ', 'Điều hòa'],
							basePrice: 1600000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{
									name: 'Internet',
									description: 'Dịch vụ Internet',
									basePrice: 90000,
									unitName: 'Tháng',
								},
								{ name: 'Giặt là', description: 'Dịch vụ giặt là', basePrice: 25000, unitName: 'Lần' },
							],
							owner: {
								_id: 'owner5',
								username: 'ngochai',
								email: 'ngochai@example.com',
								phone: '0921345678',
								identity: '543216789012',
								name: 'Ngọc Hải',
								avatar: 'http://example.com/avatars/owner5.jpg',
							},
							createdAt: '2024-05-10T08:00:00Z',
							updatedAt: '2024-06-10T08:00:00Z',
							address: {
								addressDetail: '654 Đường MNO',
								city: 'Hà Nội',
								district: 'Thanh Xuân',
								fullText: '654 Đường MNO, Thanh Xuân, Hà Nội',
								street: 'Đường MNO',
								ward: 'Thanh Xuân Trung',
							},
							period: 12,
							status: 'Đang cho thuê',
						},
					},
					{
						room: {
							_id: '6',
							name: 'Phòng 203',
							acreage: 26,
							nbCurrentPeople: 2,
							totalNbPeople: 2,
							gender: 'Nam',
							typeRoom: 'Phòng Đơn',
							deposit: 850000,
							description: 'Phòng đẹp, giá rẻ phù hợp sinh viên.',
							amentilities: ['Wifi miễn phí', 'Tủ đồ', 'Điều hòa'],
							basePrice: 1600000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{
									name: 'Internet',
									description: 'Dịch vụ Internet',
									basePrice: 90000,
									unitName: 'Tháng',
								},
								{ name: 'Giặt là', description: 'Dịch vụ giặt là', basePrice: 25000, unitName: 'Lần' },
							],
							owner: {
								_id: 'owner5',
								username: 'ngochai',
								email: 'ngochai@example.com',
								phone: '0921345678',
								identity: '543216789012',
								name: 'Ngọc Hải',
								avatar: 'http://example.com/avatars/owner5.jpg',
							},
							createdAt: '2024-05-10T08:00:00Z',
							updatedAt: '2024-06-10T08:00:00Z',
							address: {
								addressDetail: '654 Đường MNO',
								city: 'Hà Nội',
								district: 'Thanh Xuân',
								fullText: '654 Đường MNO, Thanh Xuân, Hà Nội',
								street: 'Đường MNO',
								ward: 'Thanh Xuân Trung',
							},
							period: 12,
							status: 'Đang cho thuê',
						},
					},
					{
						room: {
							_id: '7',
							name: 'Phòng 203',
							acreage: 26,
							nbCurrentPeople: 2,
							totalNbPeople: 2,
							gender: 'Nam',
							typeRoom: 'Phòng Đơn',
							deposit: 850000,
							description: 'Phòng đẹp, giá rẻ phù hợp sinh viên.',
							amentilities: ['Wifi miễn phí', 'Tủ đồ', 'Điều hòa'],
							basePrice: 1600000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{
									name: 'Internet',
									description: 'Dịch vụ Internet',
									basePrice: 90000,
									unitName: 'Tháng',
								},
								{ name: 'Giặt là', description: 'Dịch vụ giặt là', basePrice: 25000, unitName: 'Lần' },
							],
							owner: {
								_id: 'owner5',
								username: 'ngochai',
								email: 'ngochai@example.com',
								phone: '0921345678',
								identity: '543216789012',
								name: 'Ngọc Hải',
								avatar: 'http://example.com/avatars/owner5.jpg',
							},
							createdAt: '2024-05-10T08:00:00Z',
							updatedAt: '2024-06-10T08:00:00Z',
							address: {
								addressDetail: '654 Đường MNO',
								city: 'Hà Nội',
								district: 'Thanh Xuân',
								fullText: '654 Đường MNO, Thanh Xuân, Hà Nội',
								street: 'Đường MNO',
								ward: 'Thanh Xuân Trung',
							},
							period: 12,
							status: 'Đang cho thuê',
						},
					},
					{
						room: {
							_id: '8',
							name: 'Phòng 203',
							acreage: 26,
							nbCurrentPeople: 2,
							totalNbPeople: 2,
							gender: 'Nam',
							typeRoom: 'Phòng Đơn',
							deposit: 850000,
							description: 'Phòng đẹp, giá rẻ phù hợp sinh viên.',
							amentilities: ['Wifi miễn phí', 'Tủ đồ', 'Điều hòa'],
							basePrice: 1600000,
							roomAttachment: {
								url: [
									'https://cdn.chotot.com/ri-C2Xu-V-TJoP3GSMIbK-qR_38HWCLbpP0Fsp9xii8/preset:listing/plain/8e90db65c4d91d888a3f422880e892a1-2895992844373361352.webp',
								],
							},
							services: [
								{
									name: 'Internet',
									description: 'Dịch vụ Internet',
									basePrice: 90000,
									unitName: 'Tháng',
								},
								{ name: 'Giặt là', description: 'Dịch vụ giặt là', basePrice: 25000, unitName: 'Lần' },
							],
							owner: {
								_id: 'owner5',
								username: 'ngochai',
								email: 'ngochai@example.com',
								phone: '0921345678',
								identity: '543216789012',
								name: 'Ngọc Hải',
								avatar: 'http://example.com/avatars/owner5.jpg',
							},
							createdAt: '2024-05-10T08:00:00Z',
							updatedAt: '2024-06-10T08:00:00Z',
							address: {
								addressDetail: '654 Đường MNO',
								city: 'Hà Nội',
								district: 'Thanh Xuân',
								fullText: '654 Đường MNO, Thanh Xuân, Hà Nội',
								street: 'Đường MNO',
								ward: 'Thanh Xuân Trung',
							},
							period: 12,
							status: 'Đang cho thuê',
						},
					},
					// Thêm 3 phòng tiếp theo với dữ liệu tương tự...
				],
			},
		}

		return data
	},

	getDetailRoom(roomId: string) {
		// return axiosClient.get<room>(`${BASES_URL}/${roomId}`)
		let data = {
			data: {
				_id: '1',
				name: 'Phòng 101',
				acreage: 30,
				nbCurrentPeople: 2,
				totalNbPeople: 4,
				gender: 'Nam',
				typeRoom: 'Phòng Đôi',
				deposit: 1000000,
				description: 'Phòng đẹp, rộng rãi và đầy đủ tiện nghi.',
				amentilities: ['Điều hòa', 'Tủ lạnh', 'Máy giặt', 'Wifi miễn phí'],
				basePrice: 2000000,
				roomAttachment: {
					url: [
						'https://www.nhatot.com/_next/image?url=https%3A%2F%2Fcdn.chotot.com%2FOKFkL9xk_rBoveDUs4s1dC-Jf4aVo4xmmWyX6kYGxbs%2Fpreset%3Aview%2Fplain%2F193bf650b39b5a9da5532602d1cf3890-2828699195145079689.jpg&w=1920&q=100',
					],
				},
				services: [
					{
						name: 'Dọn phòng',
						description: 'Dọn phòng hàng ngày',
						basePrice: 50000,
						unitName: 'Lần',
					},
					{
						name: 'Internet',
						description: 'Internet tốc độ cao',
						basePrice: 100000,
						unitName: 'Tháng',
					},
				],
				owner: {
					_id: 'owner1',
					username: 'thanhdao',
					email: 'thanhdao@example.com',
					phone: '0912345678',
					identity: '123456789012',
					name: 'Thanh Đào',
					avatar: 'http://example.com/avatars/owner1.jpg',
				},
				createdAt: '2024-09-01T08:00:00Z',
				updatedAt: '2024-09-05T08:00:00Z',
				address: {
					addressDetail: '123 Đường ABC',
					city: 'Hà Nội',
					district: 'Cầu Giấy',
					fullText: '123 Đường ABC, Cầu Giấy, Hà Nội',
					street: 'Đường ABC',
					ward: 'Nghĩa Đô',
				},
				period: 12,
				status: 'Có sẵn',
			},
		}

		return data
	},

	getRoomrented() {
		return axiosClient.get<CommonPagination<IResponseRented[]>>(`${BASES_URL}/user/rented`)
	},

	getRoomForRent() {
		return axiosClient.get<CommonPagination<IResponseLessed[]>>(`${BASES_URL}/user/leased`)
	},

	doReOpenRoom(params: IReOpenRoom) {
		return axiosClient.post(`${BASES_URL}/re-open/${params.roomId}`, params)
	},

	getRoomFeedback(roomId: string) {
		return axiosClient.get<CommonPagination<IRoomFeedback[]>>(`${BASES_URL}/${roomId}/feedback`)
	},

	addFeedback(params: { roomId: string; content: string }) {
		return axiosClient.post(`${BASES_URL}/${params.roomId}/feedback`, { content: params.content })
	},
}
