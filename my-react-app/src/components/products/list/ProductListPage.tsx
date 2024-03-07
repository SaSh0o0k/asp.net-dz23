<<<<<<< HEAD
import {Link, useSearchParams} from "react-router-dom";
import {Button, Col, Collapse, Form, Input, Pagination, Row, Select} from "antd";
=======
import {Button, Col, Flex, Pagination, Row} from "antd";
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
import {useEffect, useState} from "react";
import {IProductData, IProductSearch} from "../../../interfaces/products/index.ts";
import {ICategoryName} from "../../../interfaces/categories";
import http_common from "../../../http_common.ts";
import ProductCard from "./ProductCard.tsx";
<<<<<<< HEAD


const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [formParams, setFormParams] = useState<IProductSearch>({
        categoryId: Number(searchParams.get('categoryId')) || undefined,
        name: searchParams.get('name') || "",
        description: searchParams.get('description') || "",
        page: Number(searchParams.get('page')) || 1,
        pageSize: Number(searchParams.get('pageSize')) || 8
=======
import {Link, useSearchParams} from "react-router-dom";
import SiteSearch from "../../SiteSearch";

const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search , setSearch] = useState<string>('');

    const [formParams, setFormParams] = useState<IProductSearch>({
        categoryId: Number(searchParams.get('categoryId')) || undefined,
        name: searchParams.get('name') || undefined,
        description: searchParams.get('description') || undefined,
        page: Number(searchParams.get('page')) || 1,
        pageSize: Number(searchParams.get('pageSize')) || 1
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
    });

    const [data, setData] = useState<IProductData>({
        list: [],
        pageSize: formParams.pageSize,
<<<<<<< HEAD
        // totalPages: 0,
=======
        totalPages: 0,
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
        pageIndex: formParams.page,
        totalCount: 0
    });

<<<<<<< HEAD
    const [categories, setCategories] = useState<ICategoryName[]>([]);

    const [form] = Form.useForm<IProductSearch>();

    useEffect(() => {
        http_common.get<ICategoryName[]>("/api/categories/names")
            .then(resp => {
=======
    // @ts-expect-error
    const [categories, setCategories] = useState<ICategoryName[]>([]);

    useEffect(() => {
        http_common.get<ICategoryName[]>("/api/categories/names")
            .then(resp=> {
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
                console.log("list categories", resp.data);
                setCategories(resp.data);
            });
    }, []);

    useEffect(() => {
<<<<<<< HEAD
=======
        updateSearchParams(formParams);
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
        http_common.get<IProductData>("/api/products",
            {
                params: formParams
            })
<<<<<<< HEAD
            .then(resp => {
=======
            .then(resp=> {
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
                console.log("Get products", resp.data);
                setData((resp.data));
            });
    }, [formParams]);

<<<<<<< HEAD
    const onSubmit = async (values: IProductSearch) => {
        findProducts({
            ...formParams,
            page: 1,
            name: values.name,
            description: values.description,
            categoryId: values.categoryId
        });
    }

    const handlePageChange = (page: number, newPageSize: number) => {
        findProducts({...formParams, page, pageSize: newPageSize});
    };

    const findProducts = (model: IProductSearch) => {
        setFormParams(model);
        updateSearchParams(model);
    }

    const updateSearchParams = (params: IProductSearch) => {
        for (const [key, value] of Object.entries(params)) {
            if (key == "pageSize" && value == 8) {
                searchParams.delete(key);
            } else if (value !== undefined && value !== 0 && value != "") {
=======

    // пошук
    useEffect(() => {
        updateSearchParams(formParams);
        fetchProducts();
    }, [formParams]);

    useEffect(() => {
        setFormParams(prevState => ({
            ...prevState,
            name: search
        }));
    }, [search]);

    const fetchProducts = () => {
        http_common.get<IProductData>("/api/products", {
            params: formParams
        })
            .then(resp => {
                console.log("Get products", resp.data);
                setData(resp.data);
            });
    };
    // кінець пошуку

    const handlePageChange = (page: number, newPageSize: number) => {
        setFormParams({...formParams, page, pageSize: newPageSize});
    };

    const updateSearchParams = (params : IProductSearch) =>{
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== 0) {
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
                searchParams.set(key, value);
            } else {
                searchParams.delete(key);
            }
        }
        setSearchParams(searchParams);
    };

<<<<<<< HEAD
    const optionsData = [
        ...(categories?.map(item => ({label: item.name, value: item.id})) || []),
        {label: 'Усі', value: 0},
    ];

    const {list, pageSize, pageIndex, totalCount} = data;
    return (
        <>
            <h1>Список продуктів</h1>
=======
    // @ts-expect-error
    const {list, totalPages, pageSize, pageIndex, totalCount } = data;
    return (
        <>
            <h1>Список продуктів</h1>

>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
            <Link to={"/products/create"}>
                <Button type="primary">
                    Додати
                </Button>
            </Link>

<<<<<<< HEAD
            <Collapse defaultActiveKey={0}>
                <Collapse.Panel key={1} header={"Панель пошуку"}>
                    <Form form={form}
                          onFinish={onSubmit}
                          layout={"vertical"}
                          initialValues={formParams}
                          style={{
                              minWidth: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              padding: 20,
                          }}
                    >
                        <Form.Item
                            label="Назва"
                            name="name"
                            htmlFor="name"
                        >
                            <Input autoComplete="name"/>
                        </Form.Item>

                        <Form.Item
                            label="Опис"
                            name="description"
                            htmlFor="description"
                        >
                            <Input autoComplete="description"/>
                        </Form.Item>

                        <Form.Item label="Категорія:" name="categoryId">
                            <Select
                                options={optionsData}
                                placeholder="Select Category"
                            />
                        </Form.Item>

                        <Row style={{display: 'flex', justifyContent: 'center'}}>
                            <Button style={{margin: 10}} type="primary" htmlType="submit">
                                Пошук
                            </Button>
                            <Button style={{margin: 10}} htmlType="button" onClick={() => {
                            }}>
                                Скасувати
                            </Button>
                        </Row>
                    </Form>
                </Collapse.Panel>
            </Collapse>

            <Row style={{marginTop: "10px", width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Pagination
                    showTotal={(total, range) => `${range[0]}-${range[1]} із ${total} записів`}
                    current={pageIndex}
                    pageSize={pageSize}
                    total={totalCount}
                    onChange={handlePageChange}
                    pageSizeOptions={[4, 8, 12, 20]}
                    showSizeChanger
                />
            </Row>
=======
            <Flex gap="20px">
                <SiteSearch search = {search} setSearch = {setSearch}/>
            </Flex>
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343

            <Row gutter={16}>
                <Col span={24}>
                    <Row>
                        {list.length === 0 ? (
                            <h2>Список пустий</h2>
                        ) : (
                            list.map((item) =>
                                <ProductCard key={item.id} {...item} />,
                            )
                        )}
                    </Row>
                </Col>
            </Row>

<<<<<<< HEAD
            <Row style={{marginTop: "10px", width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Pagination
                    showTotal={(total, range) => `${range[0]}-${range[1]} із ${total} записів`}
                    current={pageIndex}
                    pageSize={pageSize}
                    total={totalCount}
                    onChange={handlePageChange}
                    pageSizeOptions={[4, 8, 12, 20]}
=======
            <Row style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Pagination
                    showTotal={(total, range) => `${range[0]}-${range[1]} із ${total} записів`}
                    current={pageIndex}
                    defaultPageSize={pageSize}
                    total={totalCount}
                    onChange={handlePageChange}
                    pageSizeOptions={[1, 2, 5, 10]}
>>>>>>> dacdeb303c1b35ee6cdd4a207ead362cb305f343
                    showSizeChanger
                />
            </Row>

        </>
    );
}

export default ProductListPage;