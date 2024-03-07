import React, {useState} from 'react';
import Search from 'antd/es/input/Search';
import {Button} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
export { SiteSearch };

interface ISiteSearchProps {
    search: string,
    setSearch: (search: string) => void,
}
const SiteSearch : React.FC<ISiteSearchProps> = (props) => {
    const { search, setSearch } = props;
    const [searchValue , setSearchValue] = useState<string>('');

    const handleSearch = (value : string) => {
        if (value !== search){
            setSearch(value);
        }
    };

    const handleClearSearch = ()=> {
        setSearch('');
        setSearchValue('');
    };

    return (
        <>
            <Search
                style={{width: 200}}
                placeholder="я шукаю..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={handleSearch}
                enterButton
            />
            {search && search.length > 0 && (
                <Button onClick={handleClearSearch} type="primary" icon={<CloseOutlined />} danger>
                    Скасувати
                </Button>
            )}
        </>
    );
};

export default SiteSearch;