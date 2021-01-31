import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ModelBase } from "src/app/models/model-base";
import { DataService } from "./data.service";

export abstract class CrudBaseService<TEntity extends ModelBase<TId>, TId> {
    protected abstract get url(): string;

    public constructor(private readonly dataService: DataService) { }

    public getAll(): Observable<TEntity[]> {
        return this.dataService.get<TEntity[]>(this.url).pipe(
            map((response) => {
                return response.body;
            })
        );
    }

    public get<T>(id: TId): Observable<TEntity> {
        const url = `${this.url}/${id}`;
        return this.dataService.get<TEntity>(url).pipe(map((response) => response.body));
    }

    public add(item: TEntity): Observable<TId> {
        return this.dataService.post<TId>(this.url, item).pipe(map((response) => response.body));
    }

    public update(item: TEntity): Observable<TId> {
        const url = `${this.url}/${item.id}`;
        return this.dataService.put<TId>(url, item).pipe(map((response) => response.body));
    }

    public delete(id: TId): Observable<boolean> {
        const url = `${this.url}/${id}`;
        return this.dataService.delete<boolean>(url, id).pipe(map((response) => response.body));
    }
}