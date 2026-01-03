import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";

const PageTitle = ({ breadcrumbItems }) => {
    return (
        <>
            <Breadcrumb>
                {breadcrumbItems.map((item, index) => (
                    <Breadcrumb.Item
                        key={index}
                        href={item.link}
                        active={index === breadcrumbItems.length - 1}
                    >
                        {item.label}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </>
    );
};

export default PageTitle;
